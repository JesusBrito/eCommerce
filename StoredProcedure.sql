##Procedimiento para insertar stock

DELIMITER //
CREATE PROCEDURE SP_UPDATE_STOCK (IN id CHAR(20), IN stock INTEGER)
BEGIN

  declare stockIni INTEGER;
  declare stockFin INTEGER;
  SET stockIni=(SELECT Productos.Stock FROM dbApiRest.Productos WHERE Productos.Id_prod = id);
  
  SET stockFin= stockIni+stock;
  
  UPDATE dbApiRest.Productos SET Productos.Stock = stockFin WHERE Productos.Id_prod = id;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER TR_UPDATE_STOCK AFTER INSERT ON dbApiRest.Detalle_Venta FOR EACH ROW

BEGIN

  UPDATE dbApiRest.Productos SET Productos.Stock = Stock- NEW.Cantidad 
  WHERE Productos.Id_prod = NEW.ProductoIdProd;
  
END//
DELIMITER ;