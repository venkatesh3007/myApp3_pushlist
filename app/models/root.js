import DS from 'ember-data';

export default DS.Model.extend({
	pretty_name: DS.attr('string'),
	taxonomy: DS.belongsTo('taxonomy'),
	taxons: DS.hasMany('taxon')
});