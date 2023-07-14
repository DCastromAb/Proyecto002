sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'hcofficessupplies',
            componentId: 'Products_textsObjectPage',
            entitySet: 'Products_texts'
        },
        CustomPageDefinitions
    );
});