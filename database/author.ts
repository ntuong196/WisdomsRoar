import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm/browser'
import { Verse } from './verse'

@Entity('author')
export class Author {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ nullable: true })
	profilePictureURI: string

	@OneToMany((type) => Verse, (verse) => verse.author)
	verses: Verse[]
}
