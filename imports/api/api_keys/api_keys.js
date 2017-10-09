import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ApiKeys = new Mongo.Collection("api_keys");
