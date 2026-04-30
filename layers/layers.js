var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_False_color<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_False_color_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_urban_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_False_color_(urban)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_False_color_urban_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_Moisture_index_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_Moisture_index<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_Moisture_index_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDVI_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_NDVI_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDWI_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_NDWI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_NDWI_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_SWIR_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_SWIR<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_SWIR_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var lyr_2026041700_00_2026041723_59_Sentinel2_L2A_True_color_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026-04-17-00_00_2026-04-17-23_59_Sentinel-2_L2A_True_color<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026041700_00_2026041723_59_Sentinel2_L2A_True_color_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9520946.081402, 1182984.834227, -9518777.180724, 1184422.805822]
        })
    });
var format_ParqueSolar_8 = new ol.format.GeoJSON();
var features_ParqueSolar_8 = format_ParqueSolar_8.readFeatures(json_ParqueSolar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueSolar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueSolar_8.addFeatures(features_ParqueSolar_8);
var lyr_ParqueSolar_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueSolar_8, 
                style: style_ParqueSolar_8,
                popuplayertitle: 'Parque Solar',
                interactive: true,
                title: '<img src="styles/legend/ParqueSolar_8.png" /> Parque Solar'
            });
var group_20260417 = new ol.layer.Group({
                                layers: [lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_1,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_urban_2,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_Moisture_index_3,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDVI_4,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDWI_5,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_SWIR_6,lyr_2026041700_00_2026041723_59_Sentinel2_L2A_True_color_7,],
                                fold: 'open',
                                title: '20260417'});

lyr_GoogleHybrid_0.setVisible(true);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_1.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_False_color_urban_2.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_Moisture_index_3.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDVI_4.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_NDWI_5.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_SWIR_6.setVisible(false);lyr_2026041700_00_2026041723_59_Sentinel2_L2A_True_color_7.setVisible(false);lyr_ParqueSolar_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_20260417,lyr_ParqueSolar_8];
lyr_ParqueSolar_8.set('fieldAliases', {'id': 'id', 'AreaHa': 'AreaHa', });
lyr_ParqueSolar_8.set('fieldImages', {'id': 'TextEdit', 'AreaHa': 'Range', });
lyr_ParqueSolar_8.set('fieldLabels', {'id': 'no label', 'AreaHa': 'no label', });
lyr_ParqueSolar_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});