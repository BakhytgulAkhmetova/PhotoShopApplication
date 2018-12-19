import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose, withState, withHandlers } from 'recompose';

import { RadioGroup1 } from '../../../components/RadioGroup';
import { SelectGroup } from '../../../components/SelectGroup';

import { styles } from './styles';

import './FormOrder.scss';

const tarifs = [{ Name: 'Standart', ID: 1 }, { Name: 'Emergency', ID: 2 }];
const listRadio = [
    { value: 'Photo on Document', id: 1 },
    { value: 'Photoshoot', id: 2 },
    { value: 'PhotoPrint', id: 3 }
];

const handlers = {
    handleChange: ({ changeSelectedValue, order, changeOrder }) => event => {
        changeSelectedValue({ value: event.target.value, id: +event.target.id });
        changeOrder({ ...order, mainServiceId: +event.target.id, services: [], price: { items: [], sum: 0 } });
    },
    handleChangeServices: ({ changeOrder, order,
        serviceAdditionalList, servicePhotoShootList, materialList }) => event => {
        // change select
        const serviceSelectedIndex = order.services.findIndex(el => el.name === event.target.name);
        const change = serviceSelectedIndex  === -1 ?
            () => {
                changeOrder({ ...order, services: order.services.concat([{
                    id: +event.currentTarget.id,
                    name: event.target.name
                }]) });
            }
            : () => {
                const temp = order.services.slice(0);

                temp.splice(serviceSelectedIndex, 1, {  id: +event.currentTarget.id,
                    name: event.target.name });

                changeOrder({ ...order, services: temp });
            };

        change();

        // change price
        const serviceList = [serviceAdditionalList, servicePhotoShootList, materialList];

        debugger;

        const serVal = serviceList.find(servValues =>
            servValues[0].ServiceName === event.target.name && servValues[0].Price);

        const price = serVal ? serVal.find(el => +el.ID === +event.currentTarget.id).Price : null;

        if (price) {
            const newItemPrice = {
                id: +event.currentTarget.id,
                name: event.target.name,
                priceSep: price
            };
            const indexP = order.price.items.findIndex(i => i.name === event.target.name);
            let priceItems = order.price.items.slice(0);

            if (indexP === -1) {
                priceItems = priceItems.concat([newItemPrice]);
            } else {
                priceItems.splice(indexP, 1, newItemPrice);
            }
            changeOrder({ ...order, price: {
                items: priceItems,
                sum: priceItems.reduce((accum, cur) => (accum + cur.priceSep), 0) }
            });
        }
    }
};

const FormOrder = ({
    order,
    handleChangeServices,
    handleChange,
    selectedValue,
    classes,
    serviceAdditionalList,
    servicePhotoDocumentList,
    servicePhotoShootList,
    formatList,
    materialList }) => {
    return (
        <form className={classes.root}>
            <RadioGroup1
                selectedValue={selectedValue}
                handleChange={handleChange}
                listRadio={listRadio}/>
            <SelectGroup
                formObject={order}
                mainServiceId={1}
                handleChangeServices={handleChangeServices}
                disable={+selectedValue.id !== 1}
                selectList={serviceAdditionalList[0] && materialList[0] && servicePhotoDocumentList[0] ?
                    [
                        { name: servicePhotoDocumentList[0].ServiceName || '', optionList: servicePhotoDocumentList },
                        { name: materialList[0].ServiceName || '', optionList: materialList },
                        { name: serviceAdditionalList[0].ServiceName || '', optionList: serviceAdditionalList }]
                    : []
                }/>
            <SelectGroup
                formObject={order}
                mainServiceId={2}
                handleChangeServices={handleChangeServices}
                disable={+selectedValue.id !== 2}
                selectList={servicePhotoShootList[0] && serviceAdditionalList[0] ?
                    [
                        { name: servicePhotoShootList[0].ServiceName || '', optionList: servicePhotoShootList },
                        { name: serviceAdditionalList[0].ServiceName || '', optionList: serviceAdditionalList }]
                    : []
                }/>
            <SelectGroup
                formObject={order}
                mainServiceId={3}
                handleChangeServices={handleChangeServices}
                disable={+selectedValue.id !== 3}
                selectList={formatList[0] && materialList[0] ?
                    [
                        { name: formatList[0].ServiceName || '', optionList: formatList },
                        { name: materialList[0].ServiceName || '', optionList: materialList }]
                    : []
                }/>
            <SelectGroup
                disable={false}
                selectList={
                    [{ name: 'tarif', optionList: tarifs }]
                }/>
            <p className='finishing-options__price'>Price: { order.price.sum } </p>
        </form>
    );
};

FormOrder.propTypes = {
    order: PropTypes.object.isRequired,
    changeOrder: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeServices: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    formatList: PropTypes.array.isRequired,
    materialList: PropTypes.array.isRequired,
    selectedValue: PropTypes.object.isRequired,
    servicePhotoDocumentList:  PropTypes.array.isRequired,
    servicePhotoShootList: PropTypes.array.isRequired
};

export default compose(
    withState('selectedValue', 'changeSelectedValue',  { name: 'Photo on Document', id: 1 }),
    withHandlers(handlers),
    withStyles(styles)
)(FormOrder);
