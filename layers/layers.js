var wms_layers = [];

var format_AranmulaWardBoundaryshp_0 = new ol.format.GeoJSON();
var features_AranmulaWardBoundaryshp_0 = format_AranmulaWardBoundaryshp_0.readFeatures(json_AranmulaWardBoundaryshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaWardBoundaryshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaWardBoundaryshp_0.addFeatures(features_AranmulaWardBoundaryshp_0);
var lyr_AranmulaWardBoundaryshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaWardBoundaryshp_0, 
                style: style_AranmulaWardBoundaryshp_0,
                popuplayertitle: 'Aranmula/WardBoundary.shp',
                interactive: true,
    title: 'Aranmula/WardBoundary.shp<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_0.png" /> ARANMULA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_1.png" /> ARANMULA WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_2.png" /> ARATTUPUZHA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_3.png" /> EDASSERIMALA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_4.png" /> EDAYARANMULA NORTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_5.png" /> ERUMAKKADU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_6.png" /> GURUKKANKUNNU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_7.png" /> KALARIKKODU<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_8.png" /> KIDANGANNUR EAST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_9.png" /> KIDANGANNUR WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_10.png" /> KOTTA EAST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_11.png" /> KOTTA WEST<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_12.png" /> KOTTAKAKAM<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_13.png" /> KURICHIMUTTAM NORTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_14.png" /> KURICHIMUTTAM SOUTH<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_15.png" /> MALAKKARA<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_16.png" /> NALKALIKKAL<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_17.png" /> NEERVILAKAM<br />\
    <img src="styles/legend/AranmulaWardBoundaryshp_0_18.png" /> VALLANA<br />' });
var format_AranmulaRoad01shp_1 = new ol.format.GeoJSON();
var features_AranmulaRoad01shp_1 = format_AranmulaRoad01shp_1.readFeatures(json_AranmulaRoad01shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AranmulaRoad01shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AranmulaRoad01shp_1.addFeatures(features_AranmulaRoad01shp_1);
var lyr_AranmulaRoad01shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AranmulaRoad01shp_1, 
                style: style_AranmulaRoad01shp_1,
                popuplayertitle: 'Aranmula/Road01.shp',
                interactive: true,
                title: '<img src="styles/legend/AranmulaRoad01shp_1.png" /> Aranmula/Road01.shp'
            });

lyr_AranmulaWardBoundaryshp_0.setVisible(true);lyr_AranmulaRoad01shp_1.setVisible(true);
var layersList = [lyr_AranmulaWardBoundaryshp_0,lyr_AranmulaRoad01shp_1];
lyr_AranmulaWardBoundaryshp_0.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_AranmulaRoad01shp_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_AranmulaWardBoundaryshp_0.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_AranmulaRoad01shp_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_AranmulaWardBoundaryshp_0.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'inline label - always visible', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_AranmulaRoad01shp_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'inline label - always visible', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_AranmulaRoad01shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});