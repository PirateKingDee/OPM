import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Blogs = new Mongo.Collection("blogs");
