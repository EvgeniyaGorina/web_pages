<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>My Cyclo routes in <xsl:value-of select="map/place/@name"/></h2>
 
    <table>
	<caption style="background-color: #9acd32; font-weight: bold; ">
		<xsl:value-of  select="map/place/routes/route[1]/@title" />
	</caption>
    <tr bgcolor="#9acd32">
	<th>Seq position</th>
	 <th>Element name</th>
      <th>Street</th>
	  <th>start point direction</th>
	  <th>start point elevation</th>
      <th>start point position</th>
	  <th>corner in direction</th>
	  <th>corner in  elevation</th>
      <th>corner in  position</th>
	  <th>corner apex direction</th>
	  <th>corner apex  elevation</th>
      <th>corner apex  position</th>
	  <th>corner out direction</th>
	  <th>corner out  elevation</th>
      <th>corner out  position</th>
	  <th>end point direction</th>
	  <th>end point elevation</th>
      <th>end point position</th>
    <th>end corner apex direction</th>
      <th>end corner apex elevation</th>
	 <th>end corner apex position</th>
	 <th>end corner out direction</th>
      <th>end corner out elevation</th>
	 <th>end corner out position</th>
	</tr>
    <tr>
	<xsl:for-each select="map/place/routes/route/points/start/street">
	<td></td>
	<td><xsl:value-of select="name()"/></td>
	 <td><xsl:value-of select="name"/></td>
	 <td><xsl:value-of select="s-start/dir"/></td>
	 <td><xsl:value-of select="s-start/elev"/></td>
     <td><xsl:value-of select="s-start/longitude"/> &#160;<xsl:value-of select="s-start/lattitude"/> </td>
	 <td><xsl:value-of select="s-corner/in/dir"/></td>
	 <td><xsl:value-of select="s-corner/in/elev"/></td>
	 <td><xsl:value-of select="s-corner/in/longitude"/> &#160; <xsl:value-of select="s-corner/in/lattitude"/></td>
	 <td><xsl:value-of select="s-corner/apex/dir"/></td>
	 <td><xsl:value-of select="s-corner/apex/elev"/></td>
	 <td><xsl:value-of select="s-corner/apex/longitude"/> &#160; <xsl:value-of select="s-corner/apex/lattitude"/></td>
	 <td><xsl:value-of select="s-corner/out/dir"/></td>
	 <td><xsl:value-of select="s-corner/out/elev"/></td>
	 <td><xsl:value-of select="s-corner/out/longitude"/> &#160; <xsl:value-of select="s-corner/out/lattitude"/></td>
	 <td><xsl:value-of select="s-end/s-corner/in/dir"/></td>
	 <td><xsl:value-of select="s-end/s-corner/in/elev"/></td>
	 <td><xsl:value-of select="s-end/s-corner/in/longitude"/> &#160; <xsl:value-of select="s-end/s-corner/in/lattitude"/></td>
	 <td><xsl:value-of select="s-end/s-corner/apex/dir"/></td>
	 <td><xsl:value-of select="s-end/s-corner/apex/elev"/></td>
	 <td><xsl:value-of select="s-end/s-corner/apex/longitude"/> &#160; <xsl:value-of select="s-end/s-corner/apex/lattitude"/></td>
	 <td><xsl:value-of select="s-end/s-corner/out/dir"/></td>
	 <td><xsl:value-of select="s-end/s-corner/out/elev"/></td>
	 <td><xsl:value-of select="s-end/s-corner/out/longitude"/> &#160; <xsl:value-of select="s-end/s-corner/out/lattitude"/></td>
	 <td><xsl:value-of select="s-end/dir"/></td>
	 <td><xsl:value-of select="s-end/elev"/></td>
     <td><xsl:value-of select="s-end/longitude"/> &#160;<xsl:value-of select="s-end/lattitude"/> </td>
	</xsl:for-each>
	</tr>
	<tr>
	<xsl:for-each select="map/place/routes/route/points/end/point">
		<td></td>
		<td><xsl:value-of select="name()" /></td>
		<td><xsl:value-of select="title" /></td>
		<td></td>
		<td></td>
		<td><xsl:value-of select="@long" />&#160;<xsl:value-of select="@lat" /></td>
	</xsl:for-each>
	</tr>
	<xsl:for-each select="map/place/routes/route/points/point">
    <tr>
	<xsl:if test="title != ''">
	<td><xsl:value-of select="position()"/></td>
	<td><xsl:value-of select="name(.)"/></td>    	
	   <td> <xsl:value-of select="title"/> </td>
	   <td></td><td></td>
      <td><xsl:value-of select="@long"/> &#160; <xsl:value-of select="@lat"/></td>
	   
    </xsl:if>
	</tr>
    </xsl:for-each>
    <xsl:for-each select="map/place/routes/route/points/point/street">
    <tr>
	  <td><xsl:value-of select="position()"/></td>
      <td><xsl:value-of select="name(.)"/></td>
	  <td><xsl:value-of select="name"/></td>
	  <td><xsl:value-of select="s-start/dir"/></td>
	  <td><xsl:value-of select="s-start/elev"/></td>
      <td><xsl:value-of select="s-start/longitude"/> &#160;<xsl:value-of select="s-start/lattitude"/> </td>
	  <td><xsl:value-of select="s-corner/in/dir"/></td>
	  <td><xsl:value-of select="s-corner/in/elev"/></td>
	  <td><xsl:value-of select="s-corner/in/longitude"/> &#160; <xsl:value-of select="s-corner/in/lattitude"/></td>
	  <td><xsl:value-of select="s-corner/apex/dir"/></td>
	  <td><xsl:value-of select="s-corner/apex/elev"/></td>
	  <td><xsl:value-of select="s-corner/apex/longitude"/> &#160; <xsl:value-of select="s-corner/apex/lattitude"/></td>
	  <td><xsl:value-of select="s-corner/out/dir"/></td>
	  <td><xsl:value-of select="s-corner/out/elev"/></td>
	  <td><xsl:value-of select="s-corner/out/longitude"/> &#160; <xsl:value-of select="s-corner/out/lattitude"/></td>
	  <td><xsl:value-of select="s-end/dir"/></td>
	   <td><xsl:value-of select="s-end/elev"/></td>
	   <td><xsl:value-of select="s-end/longitude"/> &#160; <xsl:value-of select="s-end/lattitude"/></td>
    </tr>
    </xsl:for-each>
	
  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>