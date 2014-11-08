La estructura de un documento kml es de la siguiente forma
``` xml
<document>
  <Folder>
  		<Placemark>
  			<name>Eucalyptus dans la province de Cajamarca</name>
  			<description>Texto leyenda</description>	
  			<styleUrl>#pin</styleUrl>
  			<Point>
  				<coordinates>-78.40327000000001,-7.181912999999999,0</coordinates>
  			</Point>
  		</Placemark>
  	</Folder>
  	...
</document>
```
- name: Nombre del lugar
- Descripcion: Html para mostrar
- styleUrl: url del icono del pin
- point: una coordenada
