import { dataSource } from './database';
import { Verse } from './verse'

export class VerseRepository {
	async getVerses(): Promise<Verse[]> {
		if (!dataSource.isInitialized) await dataSource.initialize();

		const tasks = await VerseEntity.find({
			order: { completed: { direction: 'ASC' } },
		});

		return tasks;
	}
}
}
