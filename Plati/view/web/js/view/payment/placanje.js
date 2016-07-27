define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'placanje',
                component: 'Placanje_Plati/js/view/payment/method-renderer/placanje-method'
            }
        );
        
        return Component.extend({});
    }
);