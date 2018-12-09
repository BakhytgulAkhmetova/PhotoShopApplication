import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle,  withState } from 'recompose';
import PropTypes from 'prop-types';

import { Form } from '../Form';
import { ButtonList } from '../ButtonList';
import { order } from '../../../../dataState';
import { getFormatList } from '../../../../store/format/asyncActions';
import { getMaterialList } from '../../../../store/material/asyncActions';
import { getServiceAdditionalList } from '../../../../store/serviceAdditional/asyncActions';
import { getServicePhotoDocumentList } from '../../../../store/servicePhotoDocument/asyncActions';
import { getServicePhotoShootList } from '../../../../store/servicePhotoShoot/asyncActions';

const mapStateToProps = (state) => {
    return {
        formatList: state.format.formatList,
        materialList: state.material.materialList,
        serviceAdditionalList: state.serviceAdditional.data,
        servicePhotoDocumentList: state.servicePhotoDocument.data,
        servicePhotoShootList:  state.servicePhotoShoot.data
    };
};

const mapDispatchToProps = (dispatch) => ({
    getFormat: () => dispatch(getFormatList()),
    getMaterial: () =>  dispatch(getMaterialList()),
    getServiceAdditional: () => dispatch(getServiceAdditionalList()),
    getServicePhotoDocument: () => dispatch(getServicePhotoDocumentList()),
    getServicePhotoShoot: () => dispatch(getServicePhotoShootList())
});

const Content = ({
    formatList,
    materialList,
    serviceAdditionalList,
    servicePhotoDocumentList,
    servicePhotoShootList
}) => (<div>
    <Form
        servicePhotoDocumentList={servicePhotoDocumentList}
        servicePhotoShootList={servicePhotoShootList}
        serviceAdditionalList={serviceAdditionalList}
        formatList={formatList}
        materialList={materialList}/>
    <ButtonList/>
</div>);

Content.propTypes = {
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
    withState('order', 'changeOrder', order)
)(Content);
