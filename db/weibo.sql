create database if not exists weibo;

use weibo;

drop table if exists user;
create table if not exists user(
	id int primary key auto_increment not null,
	name char(128) not null,
	password char(100) not null
);

delimiter $$

drop procedure if exists user_register;
create procedure user_register(in_name char(128),
	in_password char(128),out result int)
begin
	declare user_id int;

	set user_id=null;

	select id into user_id from user where name=in_name;
	if(isnull(user_id)) then
		insert into user(name,password)
						values(in_name,in_password);
		set result=0;
	else
		set result=1;
	end if;
end$$
