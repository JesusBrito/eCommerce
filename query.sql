##Categorias

Insert into `dbApiRest`.`Categorias`  (`Id_Categoria`,`Nombre_Categoria`,`Str_img`,`createdAt`,`updatedAt`) 
								values('1','Botiquines','asd', '2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Categorias`  (`Id_Categoria`,`Nombre_Categoria`,`Str_img`,`createdAt`,`updatedAt`) 
								values('2','Anaqueles','asd', '2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Categorias`  (`Id_Categoria`,`Nombre_Categoria`,`Str_img`,`createdAt`,`updatedAt`) 
								values('3','Cajas para dinero','asd', '2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Categorias`  (`Id_Categoria`,`Nombre_Categoria`,`Str_img`,`createdAt`,`updatedAt`) 
								values('4','Alhajeros','asd', '2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Categorias`  (`Id_Categoria`,`Nombre_Categoria`,`Str_img`,`createdAt`,`updatedAt`) 
								values('5','Guardallaves','asd', '2018-03-31 00:13:33','2018-03-31 00:13:33');

##Productos
                            
Insert into `dbApiRest`.`Productos`  (`Id_prod`,`Nombre`,`Descripcion`,`Precio`, `Stock`,`Estatus`,
									`Alto`, `Largo`, `Ancho`,`createdAt`,`updatedAt`, `CategoriaIdCategoria`) 
				values('1','Botiquin mini','BOT', 120, 300,'A', 12,12,12,'2018-03-31 00:13:33','2018-03-31 00:13:33',1);
			
Insert into `dbApiRest`.`Productos`  (`Id_prod`,`Nombre`,`Descripcion`,`Precio`, `Stock`,`Estatus`,
									`Alto`, `Largo`, `Ancho`,`createdAt`,`updatedAt`, `CategoriaIdCategoria`) 
				values('2','Botiquin Med','BOT', 120, 300,'A', 12,12,12,'2018-03-31 00:13:33','2018-03-31 00:13:33',1);
  
Insert into `dbApiRest`.`Productos`  (`Id_prod`,`Nombre`,`Descripcion`,`Precio`, `Stock`,`Estatus`,
									`Alto`, `Largo`, `Ancho`,`createdAt`,`updatedAt`, `CategoriaIdCategoria`) 
				values('3','Botiquin Familiar','BOT', 120, 300,'A', 12,12,12,'2018-03-31 00:13:33','2018-03-31 00:13:33',1);

Insert into `dbApiRest`.`Productos`  (`Id_prod`,`Nombre`,`Descripcion`,`Precio`, `Stock`,`Estatus`,
									`Alto`, `Largo`, `Ancho`,`createdAt`,`updatedAt`, `CategoriaIdCategoria`) 
				values('4','Botiquin Industrial','BOT', 120, 300,'A', 12,12,12,'2018-03-31 00:13:33','2018-03-31 00:13:33',1);
  
##Colores

Insert into `dbApiRest`.`Colores`  (`Id_Color`,`Nombre_Color`,`createdAt`,`updatedAt`) 
				values('1','Azul amartillado','2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Colores`  (`Id_Color`,`Nombre_Color`,`createdAt`,`updatedAt`) 
				values('2','Gris','2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Colores`  (`Id_Color`,`Nombre_Color`,`createdAt`,`updatedAt`) 
				values('3','Rojo','2018-03-31 00:13:33','2018-03-31 00:13:33');

Insert into `dbApiRest`.`Colores`  (`Id_Color`,`Nombre_Color`,`createdAt`,`updatedAt`) 
				values('4','Blanco regrigerador','2018-03-31 00:13:33','2018-03-31 00:13:33');
                
##Clientes

INSERT INTO `dbApiRest`.`Clientes` (`RFC`, `Password`, `Nombre`, `Ap_Pat`, `Ap_Mat`, `Calle`, `Colonia`, `Numero`, `Ciudad`, `Estado`, `Cp`, `Telefono`, `Email`, `createdAt`, `updatedAt`) VALUES ('BIBJ961129HDFRRN09', '12345', 'Juan', 'Brito', 'Brito', 'Calle', 'Colonia', '1', 'Ciudad', 'CDMX', '1', '1', 'jesu291196@gmail.com', '2018-03-31 00:13:33', '2018-03-31 00:13:33');
INSERT INTO `dbApiRest`.`Clientes` (`RFC`, `Password`, `Nombre`, `Ap_Pat`, `Ap_Mat`, `Calle`, `Colonia`, `Numero`, `Ciudad`, `Estado`, `Cp`, `Telefono`, `Email`, `createdAt`, `updatedAt`) VALUES ('BIBJ961', '12345', 'Jesus', 'Brito', 'Brito', 'Calle', 'Colonia', '1', 'Ciudad', 'CDMX', '1', '1', 'jesus291196@gmail.co', '2018-03-31 00:13:33', '2018-03-31 00:13:33');
INSERT INTO `dbApiRest`.`Clientes` (`RFC`, `Password`, `Nombre`, `Ap_Pat`, `Ap_Mat`, `Calle`, `Colonia`, `Numero`, `Ciudad`, `Estado`, `Cp`, `Telefono`, `Email`, `createdAt`, `updatedAt`) VALUES ('BIBJ96', '12345', 'Juan', 'Brito', 'Brito', 'Calle', 'Colonia', '1', 'Ciudad', 'CDMX', '1', '1', 'jesus291196@gmail.c', '2018-03-31 00:13:33', '2018-03-31 00:13:33');
INSERT INTO `dbApiRest`.`Clientes` (`RFC`, `Password`, `Nombre`, `Ap_Pat`, `Ap_Mat`, `Calle`, `Colonia`, `Numero`, `Ciudad`, `Estado`, `Cp`, `Telefono`, `Email`, `createdAt`, `updatedAt`) VALUES ('BIBJ9', '12345', 'Juan', 'Brito', 'Brito', 'Calle', 'Colonia', '1', 'Ciudad', 'CDMX', '1', '1', 'jesus291196@gmail', '2018-03-31 00:13:33', '2018-03-31 00:13:33');

##Ventas
INSERT INTO `dbApiRest`.`Ventas` (`No_Venta`, `Fecha`, `Estatus`, `No_Rastreo`, `Costo_envio`, `Subtotal`, `Iva`, `Total`, `createdAt`, `updatedAt`, `ClienteRFC`) VALUES ('1', '2018-03-31 00:13:33', 'P', '12', '50', '1000', '160', '1160', '2018-03-31 00:13:33', '2018-03-31 00:13:33', 'BIBJ961129HDFRRN09');

##Detalle venta

INSERT INTO `dbApiRest`.`Detalle_Venta` (`Id_Detalle`, `Cantidad`, `Subtotal`, `Precio`, `createdAt`, `updatedAt`, `ColoreIdColor`, `ProductoIdProd`, `VentaNoVenta`) VALUES ('2', '5', '100', '30', '2018-03-31 00:13:33', '2018-03-31 00:13:33', '2', '2', '1');