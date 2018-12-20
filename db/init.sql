
create table if not exists quotes(
   id serial,
   phrase text
   );


create table if not exists users(
    id serial,
    name varchar(50) not null,
    email varchar(50) not null,
    picture text,
    auth0_id text
);