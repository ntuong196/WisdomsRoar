import * as FileSystem from 'expo-file-system'
import {setState} from 'react'

const dbDir = FileSystem.cacheDirectory + 'database/'
const dbFileUri = (dbId: string) => dbDir + `wisdomsroar-${dbId}.gif`
const dbUrl = (downloadCode: string) =>
	`https://drive.google.com/file/${downloadCode}`

const callback = (downloadProgress: {
	totalBytesWritten: number
	totalBytesExpectedToWrite: number
}) => {
	const progress =
		downloadProgress.totalBytesWritten /
		downloadProgress.totalBytesExpectedToWrite
	setState({
		downloadProgress: progress,
	})
}

export const downloadDatabase = async () => {
	FileSystem.createDownloadResumable(
		'http://techslides.com/demos/sample-videos/small.mp4',
		FileSystem.documentDirectory + 'small.mp4',
		{},
		callback,
	)
}

export const importDatabase = async () => {
	const result = DocumentPicker
}


