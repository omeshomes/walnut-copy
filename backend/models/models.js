'use strict';
// Maybe we have to use schema
import mongoose from 'mongoose';

// Not sure how to use Token
const TokenSchema = new mongoose.Schema({

});

const CommunitySchema = new mongoose.Schema({
  title: {
    type: String
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  icon: {
    type: String,
  }
});

const UserSchema = new mongoose.Schema({
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community'
    }
  ],
  currentCommunity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  username: {
    type: String
  },
  fullName: {
    type: String
  },
  facebookId: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  pictureURL: {
    type: String
  },
  preferences: [
    {
      type: String
    }
  ],
  from: {
    type: String
  },
  location: {
    college: [Number],
    homeTown: [Number],
    occupation: [Number]
  },
  phone: {
    type: String
  },
  currentOccupation: {
    type: String,
    default: ''
  },
  currentOccupationCity: {
    type: String,
    default: null
  },
  pastOccupations: {
    type: Array
  },
  links: {
    type: Array
  },
  interests: {
    type: Array
  },
  projects: {
    type: Array
  },
  portfolio: {
    type: Array
  },
  education: {
    college: String,
    majors: Array,
    classYear: String,
  },
  tags: {
    type: Array
  }
});

const QuoteSchema = new mongoose.Schema({
  content: {
    type: String
  },
  createdBy: {
    type: String
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  }
});

const PostSchema = new mongoose.Schema({
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  content: {
    type: String
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  tags: [
    {
      type: String,
    }
  ],
  comments: [
    {
      content: {
        type: String
      },
      createdAt: {
        type: Date
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
    }
  ],
  commentNumber: {
    type: Number
  }
});


const TagSchema = new mongoose.Schema({
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community'
  },
  name: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Posts'
    }
  ]
});

const Token = mongoose.model('Token', TokenSchema);
const User = mongoose.model('User', UserSchema);
const Quote = mongoose.model('Quote', QuoteSchema);
const Post = mongoose.model('Post', PostSchema);
const Tag = mongoose.model('Tag', TagSchema);
const Community = mongoose.model('Community', CommunitySchema);


module.exports = {
  Token: Token,
  User: User,
  Quote: Quote,
  Post: Post,
  Tag: Tag,
  Community: Community
};
