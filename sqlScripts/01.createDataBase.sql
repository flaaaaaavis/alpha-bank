CREATE TABLE public.users (
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP,
	"deleted_at" TIMESTAMP,
	"id" serial NOT NULL,
	"cpf" varchar(11) NOT NULL,
	"name" varchar(100) NOT NULL,
	"bdate" DATE NOT NULL,
	"password" varchar(100) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
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
	"user_id" integer NOT NULL,
	"id" serial NOT NULL,
	"uuid" varchar(100) NOT NULL UNIQUE,
	"number" serial NOT NULL UNIQUE,
	"balance" numeric NOT NULL,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("id")
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
	"user_id" integer NOT NULL,
	"id" serial NOT NULL,
	"number" numeric NOT NULL UNIQUE,
	"expirity_date" DATE NOT NULL,
	"ssid" numeric(3) NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.transactions (
	"created_by" integer NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"sender_account" integer NOT NULL,
	"receiver_account" integer NOT NULL,
	"id" serial NOT NULL,
	"value" numeric NOT NULL,
	"date" TIMESTAMP NOT NULL,
	"description" varchar(100) NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.sessions (
	"jwt" varchar(200) NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("jwt")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk0" FOREIGN KEY ("created_by") REFERENCES "users"("id");
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk1" FOREIGN KEY ("updated_by") REFERENCES "users"("id");
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk2" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk3" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("created_by") REFERENCES "users"("id");
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk1" FOREIGN KEY ("updated_by") REFERENCES "users"("id");
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk2" FOREIGN KEY ("deleted_by") REFERENCES "users"("id");
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk3" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk0" FOREIGN KEY ("created_by") REFERENCES "users"("id");
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk1" FOREIGN KEY ("sender_account") REFERENCES "accounts"("number");
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk2" FOREIGN KEY ("receiver_account") REFERENCES "accounts"("number");

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE IF EXISTS public.users
    ADD COLUMN email character varying(100) UNIQUE NOT NULL;