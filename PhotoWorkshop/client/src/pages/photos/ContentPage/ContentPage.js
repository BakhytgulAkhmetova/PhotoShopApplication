import React from 'react';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import Gallery from 'react-photo-gallery';

import { SelectedImage } from '../../../components/SelectedImage';
import { addPhotoFetch } from '../../../api/photo';
import { photosInitial } from './data';

import './ContentPage.scss';

const handlers = {
    handleSelectPhoto: ({ gallery, changeGallery }) => (event, obj) => {
        const phs = gallery.photos;

        phs[obj.index].selected = !phs[obj.index].selected;
        changeGallery({ ...gallery, photos: phs });
    },
    handleToggleSelect({ gallery, changeGallery }) {
        const phs = gallery.photos.map((photo, index) => {
            return { ...photo, selected: !gallery.selectAll };
        });

        changeGallery({ photos: phs, selectAll: !gallery.selectAll });
    },
    handleSelectFile: ({ changeSelectedFile }) => event => {
        changeSelectedFile(event.target.files[0]);
    },
    handleUploadFile: async ({ selectedFile }) => {
        const photo = {
            data: selectedFile.size,
            customerId: 1026,
            type: selectedFile.type,
            name: selectedFile.name
        };

        await addPhotoFetch(photo);
    }
};

const ContentPage = ({ handleSelectPhoto,
    handleSelectFile,
    handleUploadFile,
    handleToggleSelect, gallery }) => {
    return (
        <div className='content-page-photo'>
            <p className='content-page-photo__btns'>
                <div>
                    <button
                        onClick={handleToggleSelect}
                        className='toggle-select'>Select all
                    </button>
                </div>
                <div>
                    <input type='file' onChange={handleSelectFile}/>
                    <button
                        onClick={handleUploadFile}
                        className='toggle-select'> Upload
                    </button>
                </div>
            </p>
            <Gallery
                photos={gallery.photos}
                onClick={handleSelectPhoto}
                ImageComponent={SelectedImage}
                direction={'column'}/>
        </div>
    );
};

ContentPage.propTypes = {
    handleSelectPhoto: PropTypes.func.isRequired,
    gallery: PropTypes.array.isRequired,
    handleToggleSelect: PropTypes.func.isRequired,
    handleSelectFile: PropTypes.func.isRequired,
    handleUploadFile: PropTypes.func.isRequired,
    selectedFile: PropTypes.object.isRequired
};

export default compose(
    withState('gallery', 'changeGallery', { photos: photosInitial, selectAll: false }),
    withState('selectedFile', 'changeSelectedFile', {}),
    withHandlers(handlers)
)(ContentPage);
