import parser from './parser';
import {creatorTypeFactory} from '@form-create/core';
import Uplaod from './upload.vue';

console.log(Uplaod);

const name = 'upload';

const types = {
    image: ['image', 0],
    file: ['file', 0],
    uploadFileOne: ['file', 1],
    uploadImageOne: ['image', 1],
};

const maker = Object.keys(types).reduce((initial, key) => {
    initial[key] = creatorTypeFactory(name, m => m.props({uploadType: types[key][0], maxLength: types[key][1]}));
    return initial
}, {});

maker.uploadImage = maker.image;
maker.uploadFile = maker.file;

export default {parser, name, maker};
