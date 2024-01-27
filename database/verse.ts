import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
	ManyToOne,
} from 'typeorm/browser'
import { Category } from './category'
import { Author } from './author'

@Entity('verse')
export class Verse {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column('text')
	detail: string

	@Column('datetime')
	date: Date

	@ManyToMany((type) => Category, {
		cascade: ['insert'],
	})
	@JoinTable()
	categories: Category[]

	@ManyToOne((type) => Author, (author) => author.verses, {
		cascade: ['insert'],
	})
	author: Author

	@Column('boolean', { default: false })
	selected: boolean
}
/*
Column types for sqlite / cordova / react-native / expo
int, int2, int8, integer, tinyint, smallint, mediumint, bigint, decimal, numeric,
float, double, real, double precision, datetime, varying character, character,
native character, varchar, nchar, nvarchar2, unsigned big int, boolean, blob, text, clob, date
 */
