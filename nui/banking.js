/*

*/

var Pin = 1122

function MenuOption(data) {
    $("#Account").hide();
    $("#Deposit").hide(); 
    $("#DepositActions").hide();
    $("#Withdraw").hide(); 
    $("#WithdrawActions").hide();
    $("#Transfer").hide();
    $("#TransferActions").hide();
    $("#"+data+"").show();
    if (data != 'Account') {
        $("#"+data+"Actions").show();
    }
};

function EventOption(data) {
    switch(data){
        case 'Client:Withdraw':
            TriggerEvent("Client:Withdraw")
        break
        case 'Client:Deposit':
            TriggerEvent("Client:Deposit")
        break
        case 'Client:Amount':
            TriggerEvent("Client:Amount")
        break
        case 'Client:Account':
            TriggerEvent("Client:Account")
        break
    };
};

function Populate(data) {

};

function PinCheck() {
    var Check = document.querySelector('#EnterPin').value;
    let Count = 0
    if (Pin == Check) {
        $("#Pin").hide();
        $("#Home").show();
    } else {
        if (Count < 3) {
            Count = Count++;
            TriggerEvent("Client:Notify","Incorrect Pin: Attempt #"+Count+".")
        } else {
            TriggerEvent("Client:Notify","Incorrect Pin: Attempt #"+Count+". Please Change your PIN with the Bank!",2)
            $.post('https://c.banking/Client:NUI:OnClose', JSON.stringify({

            }));
        };
    };
};

function Deposit(amount) {
    $.post('https://c.banking/Client:Banking:Deposit', JSON.stringify({
        data: {},
    }));
};

function Withdraw(amount) {
    $.post('https://c.banking/Client:Banking:Withdraw', JSON.stringify({
        data: {},
    }));
};

function Transfer(amount, too) {
    $.post('https://c.banking/Client:Banking:Transfer', JSON.stringify({
        data: {},
    }));
};

function PayBill(amount, bill) {
    $.post('https://c.banking/Client:Banking:PayBill', JSON.stringify({
        data: {},
    }));
};

function PayLoan(amount) {
    $.post('https://c.banking/Client:Banking:PayLoan', JSON.stringify({
        data: {},
    }));
};

$(document).ready(function () {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            let data = event.data;
            switch (data.message) {
                case 'OnOpen':
                    Populate(data.Packet)
                    Pin = data.Packet.Pin
                    break;
                case 'OnUpdate':
                    Populate(data.Packet)
                    Pin = data.Packet.Pin
                    break;
                case 'default':
                    break;
            }
        });
    };
    document.onkeyup = function(data){
        if (data == 27){
            $("#Pin").show();
            $("#Home").hide();
            $.post('https://c.banking/Client:NUI:OnClose', JSON.stringify({

            }));
        }
    };    
});