CREATE TABLE public.users (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_by" integer,
	"updated_at" TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"user_id" serial NOT NULL,
	"uuid" varchar(32) NOT NULL UNIQUE,
	"CPF" varchar(11) NOT NULL,
	"name" varchar(100) NOT NULL,
	"bdate" DATE NOT NULL,
	"password" varchar(50) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.accounts (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_by" integer,
	"updated_at" TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"user_id" serial NOT NULL,
	"account_id" serial NOT NULL,
	"number" serial NOT NULL UNIQUE,
	"balance" numeric(9,2) NOT NULL,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("account_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.cards (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_by" integer,
	"updated_at" TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"account_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"card_id" serial NOT NULL,
	"number" integer NOT NULL UNIQUE,
	"expirity_date" DATE NOT NULL,
	"password" numeric(6) NOT NULL,
	"SSID" numeric(3) NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("card_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.transactions (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_by" integer,
	"updated_at" TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"sender_account" integer NOT NULL,
	"receiver_account" integer NOT NULL,
	"id" serial NOT NULL,
	"value" numeric(9,2) NOT NULL,
	"date" TIMESTAMP NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.invoices (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_by" integer,
	"updated_at" TIMESTAMP,
	"deleted_by" integer,
	"deleted_at" TIMESTAMP,
	"id" serial NOT NULL,
	"card_id" integer NOT NULL,
	"due_date" TIMESTAMP NOT NULL,
	"total_value" numeric(9,2) NOT NULL,
	CONSTRAINT "invoices_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.purchases (
	"id" serial NOT NULL,
	"invoice_id" integer NOT NULL,
	"seller" varchar(20) NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"value" numeric(9,2) NOT NULL,
	CONSTRAINT "purchases_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.sessions (
	"jwt" varchar(200) NOT NULL,
	"user_id" serial NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("jwt")
) WITH (
  OIDS=FALSE
);


ALTER TABLE accounts ADD CONSTRAINT "accounts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE cards ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("account_id") REFERENCES "accounts"("account_id");
ALTER TABLE cards ADD CONSTRAINT "cards_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");

ALTER TABLE transactions ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("sender_account") REFERENCES "accounts"("number");
ALTER TABLE transactions ADD CONSTRAINT "transactions_fk1" FOREIGN KEY ("receiver_account") REFERENCES "accounts"("number");

ALTER TABLE invoices ADD CONSTRAINT "invoices_fk0" FOREIGN KEY ("card_id") REFERENCES "cards"("card_id");

ALTER TABLE purchases ADD CONSTRAINT "purchases_fk0" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id");

ALTER TABLE sessions ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");