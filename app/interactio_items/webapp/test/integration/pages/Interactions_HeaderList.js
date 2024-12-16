sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'interactioitems',
            componentId: 'Interactions_HeaderList',
            contextPath: '/Interactions_Header'
        },
        CustomPageDefinitions
    );
});