import React from 'react'
import ViewSimple from './ViewSimple';
import ViewConfigurable from './ViewConfigurable';
import ViewBundleView from './ViewBundleView';

const types = {
    simple: 'SimpleProduct',
    configurable: 'ConfigurableProduct',
    bundle: 'BundleProduct'
};

const ViewOptions = ({ productType, options }) => {
    console.log(productType);
    console.log(options);


    if (productType == types.simple) {
        return (
            <ViewSimple />
        )
    } else if (productType == types.configurable) {
        return (
            <ViewConfigurable options={options} />
        )
    } else if (productType == types.bundle) {
        return (
            <ViewBundleView />
        )
    }
}

export default ViewOptions
