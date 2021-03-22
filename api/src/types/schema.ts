import { Relation } from './relation';
import { Permission } from './permissions';
import { types } from './field';

type CollectionsOverview = {
	[name: string]: {
		collection: string;
		primary: string;
		singleton: boolean;
		note: string | null;
		fields: {
			[name: string]: {
				field: string;
				defaultValue: any;
				nullable: boolean;
				type: typeof types[number] | 'unknown' | 'alias';
				precision: number | null;
				scale: number | null;
				special: string[];
				note: string | null;
			};
		};
	};
};

export type SchemaOverview = {
	full: {
		collections: CollectionsOverview;
		relations: Relation[];
	};
	user: {
		collections: CollectionsOverview;
		relations: Relation[];
		permissions: Permission[];
	};
};
