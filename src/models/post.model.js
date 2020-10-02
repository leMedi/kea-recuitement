const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const postSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    diplome: {
      type: String,
      required: true,
      trim: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
      trim: true,
      validate(value) {
        if (!Number.isInteger(value)) {
          throw new Error('yearsOfExperience must be a interger');
        }

        if (value > 1) {
          throw new Error('Post should require minimum of 1 year of experience');
        }
      },
    },
    availablePlaces: {
      type: Number,
      required: true,
      validate(value) {
        if (!Number.isInteger(value)) {
          throw new Error('availablePlaces must be a interger');
        }

        if (value < 1) {
          throw new Error('Post should have a minimum of 1 availablePlaces');
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
postSchema.plugin(toJSON);
postSchema.plugin(paginate);

/**
 * Check if post can accept applicats
 * @param {ObjectId} id - The psot's id
 * @returns {Promise<boolean>}
 */
postSchema.statics.canAcceptCandidate = async function (id) {
  const post = await this.findById(id);

  if (post.yearsOfExperience === 0)
    return false;
  return true;
};

/**
 * @typedef Post
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
