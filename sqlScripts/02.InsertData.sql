INSERT INTO users( CPF, name, bdate, password) VALUES ( , , , );

INSERT INTO accounts(user_id, uuid, number, balance) VALUES ( , , , );

INSERT INTO cards(id, number, expirity_date, password, SSID) VALUES ( , , , , );

INSERT INTO transactions(id, value, date, sender_account, receiver_account) VALUES ( , , , , );