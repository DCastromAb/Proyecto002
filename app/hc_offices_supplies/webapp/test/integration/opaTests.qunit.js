sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hcofficessupplies/test/integration/FirstJourney',
		'hcofficessupplies/test/integration/pages/ProductsList',
		'hcofficessupplies/test/integration/pages/ProductsObjectPage',
		'hcofficessupplies/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hcofficessupplies') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheProducts_textsObjectPage: Products_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);