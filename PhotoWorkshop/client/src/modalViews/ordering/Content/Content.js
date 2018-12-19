import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle,  withState } from 'recompose';
import PropTypes from 'prop-types';

// import { Form } from '../Form';
import { FormOrder } from '../FormOrder';
import { ButtonList } from '../ButtonList';
import { emptyOrder } from '../data';
import { getFormatList } from '../../../store/format/asyncActions';
import { getMaterialList } from '../../../store/material/asyncActions';
import { getServiceAdditionalList } from '../../../store/serviceAdditional/asyncActions';
import { getServicePhotoDocumentList } from '../../../store/servicePhotoDocument/asyncActions';
import { getServicePhotoShootList } from '../../../store/servicePhotoShoot/asyncActions';

const mapStateToProps = (state) => ({
    formatList: state.format.formatList,
    materialList: state.material.materialList,
    serviceAdditionalList: state.serviceAdditional.data,
    servicePhotoDocumentList: state.servicePhotoDocument.data,
    servicePhotoShootList:  state.servicePhotoShoot.data
});

const mapDispatchToProps = (dispatch) => ({
    getFormat: () => dispatch(getFormatList()),
    getMaterial: () =>  dispatch(getMaterialList()),
    getServiceAdditional: () => dispatch(getServiceAdditionalList()),
    getServicePhotoDocument: () => dispatch(getServicePhotoDocumentList()),
    getServicePhotoShoot: () => dispatch(getServicePhotoShootList())
});

const Content = ({
    order,
    changeOrder,
    formatList,
    materialList,
    serviceAdditionalList,
    servicePhotoDocumentList,
    servicePhotoShootList
}) => (<div>
    <FormOrder
        order={order}
        changeOrder={changeOrder}
        servicePhotoDocumentList={servicePhotoDocumentList}
        servicePhotoShootList={servicePhotoShootList}
        serviceAdditionalList={serviceAdditionalList}
        formatList={formatList}
        materialList={materialList}/>
    <ButtonList order={order}/>
</div>);

Content.propTypes = {
    order: PropTypes.object.isRequired,
    changeOrder: PropTypes.isRequired,
    formatList: PropTypes.array.isRequired,
    materialList: PropTypes.array.isRequired,
    serviceAdditionalList: PropTypes.array.isRequired,
    servicePhotoDocumentList: PropTypes.array.isRequired,
    servicePhotoShootList: PropTypes.array.isRequired
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle({
        componentDidMount() {
            this.props.getFormat();
            this.props.getMaterial();
            this.props.getServiceAdditional();
            this.props.getServicePhotoDocument();
            this.props.getServicePhotoShoot();
        }
    }),
    withState('order', 'changeOrder', emptyOrder)
)(Content);
