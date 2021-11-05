-- ====================================================================================--
--  MIT License : Ingenium-Games (Twiitchter) : https://www.ingenium.games
-- ====================================================================================--
--[[
NOTES.
    -
    -
    -
]] --

math.randomseed(c.Seed)
-- ====================================================================================--

RegisterNetEvent("Server:Banking:Deposit")
AddEventHandler("Server:Banking:Deposit", function(data, req)
    local src = req or source
    local amount = data
    local xPlayer = c.data.GetPlayer(src)
    --
    xPlayer.RemoveMoney(amount)
    xPlayer.AddBank(amount)
    TriggerClientEvent("Client:Notify", xPlayer.ID, "Diposited $"..amount, "warn")
end)

RegisterNetEvent("Server:Banking:Withdraw")
AddEventHandler("Server:Banking:Withdraw", function(data, req)
    local src = req or source
    local amount = data
    local xPlayer = c.data.GetPlayer(src)
    --
    xPlayer.RemoveBank(amount)
    xPlayer.AddMoney(amount)
    TriggerClientEvent("Client:Notify", xPlayer.ID, "Withdrew $"..amount, "warn")
end)

RegisterNetEvent("Server:Banking:Transfer")
AddEventHandler("Server:Banking:Transfer", function(data, req, id)
    local src = req or source
    local too = id
    local amount = data
    local xPlayer = c.data.GetPlayer(src)
    local tPlayer = c.data.GetPlayer(too)
    --
    xPlayer.RemoveBank(amount)
    tPlayer.AddBank(amount)
    TriggerClientEvent("Client:Notify", xPlayer.ID, "Sent $"..amount.." to "..tPlayer.Full_Name, "warn")
    TriggerClientEvent("Client:Notify", tPlayer.ID, "Recieved $"..amount.." from "..xPlayer.Full_Name, "warn")
end)

RegisterNetEvent("Server:Banking:Remove")
AddEventHandler("Server:Banking:Remove", function(data, req)
    local src = req or source
    local amount = data
    local xPlayer = c.data.GetPlayer(src)
    --
    xPlayer.RemoveBank(amount)
    TriggerClientEvent("Client:Notify", xPlayer.ID, "Payed $"..amount, "warn")
end)

RegisterNetEvent("Server:Banking:Add")
AddEventHandler("Server:Banking:Add", function(data, req)
    local src = req or source
    local amount = data
    local xPlayer = c.data.GetPlayer(src)
    --
    xPlayer.AddBank(amount)
    TriggerClientEvent("Client:Notify", xPlayer.ID, "$"..amount.." was added to your account.", "warn")
end)
