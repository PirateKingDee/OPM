import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection("product");
ProductSchema = new SimpleSchema({
  created_at: {
    type: Date,
    label: "created at",
    optional: true,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else if (this.isUpsert) return {$setOnInsert: new Date};
      else return this.unset();
    }
  },
  updated_at: {
    type: Date,
    label: "updated at",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    }
  },
  product_id: {
    type: String,
    label: "product_id",
    max: 128,
  },
  name: {
    type: String,
    label: "product name",
    max: 128
  },
  description: {
    type: String,
    label: "description",
    optional: true
  },
  price: {
    type: Number,
    label: "price",
    decimal: true,
    defaultValue: 0,
  },
  image:{
    type: String,
    label: "product image"
  },
  rating:{
    type: Number,
    decimal: true,
    label: "rating",
    optional: true,
    defaultValue: 0
  },
  total_rating:{
    type: Number,
    label: "total rating",
    optional: true,
    defaultValue: 0
  }

});

Products.attachSchema(ProductSchema);
