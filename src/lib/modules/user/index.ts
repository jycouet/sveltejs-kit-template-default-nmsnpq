import { kitqlModules } from '@kitql/all-in';
import { resolvers } from './$kitql/resolvers';
import { typeDefs } from './$kitql/typedefs';

export const userModule = kitqlModules({
	id: 'user-module',
	typeDefs,
	resolvers
});
