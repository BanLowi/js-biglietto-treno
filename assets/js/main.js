const ticket_default = 0.21;

let user_age = prompt("Inserisci Età")
let user_distance = prompt("Inserisci Distanza")

let ticket_price;

if (user_age >= 65) {
    ticket_price = (ticket_default * user_distance) - (ticket_default * user_distance * 0.4);

}
else if (user_age < 18) {
    ticket_price = (ticket_default * user_distance) - (ticket_default * user_distance * 0.2);
}
else {
    ticket_price = ticket_default * user_distance;
}
alert(ticket_price)

