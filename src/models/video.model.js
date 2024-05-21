import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-pagination';

const videoSchema = new Schema({
  videoFile:{
    type: String,
    required: [true, 'Video file is required'],
  },
  thumbnail:{
    type: String,
    required: [true, 'Thumbnail is required'],
  },
  title:{
    type: String,
    required: [true, 'Title is required'],
  },
  description:{
    type: String,
    required: [true, 'Description is required'],
  },
  duration:{
    type: Number,
    required: true,
  },
  views:{
    type: Number,
    default: 0,
  },
  isPublished:{
    type: Boolean,
    default: true,
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }

}, {timeStamps: true});




export const Video = mongoose.model('Video', videoSchema);