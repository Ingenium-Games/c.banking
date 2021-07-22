/*

*/

function Populate(data) {

};

function Deposit(amount) {
    $.post('https://c.banking/Client:Banking:Deposit', JSON.stringify({
        data: {},
    }));
};

function Wtchdrawl(amount) {
    $.post('https://c.banking/Client:Banking:Withdrawl', JSON.stringify({
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
                    break;
                case 'OnUpdate':
                    Populate(data.Packet)
                    break;
                case 'default':
                    break;
            }
        });
    };
    document.onkeyup = function(data){
        if (data == 27){
            $.post('https://c.banking/Client:NUI:OnClose', JSON.stringify({

            }));
        }
    };    
});
