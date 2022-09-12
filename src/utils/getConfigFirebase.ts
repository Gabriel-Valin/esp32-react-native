import AsyncStorage from "@react-native-async-storage/async-storage"

// export type FirebaseOptions = {
//     apiKey ?: string;

//     authDomain?: string;

//     databaseURL?: string;

//     projectId?: string;

//     storageBucket?: string;

//     messagingSenderId?: string;

//     appId?: string;

//     measurementId?: string;
// } | undefined | string

export const setConfigFirebase = async (config?: string) => {
  try {
    await AsyncStorage.setItem('@firebase_config', config!)
    console.log(await getConfigFibrease('@firebase_config'))
    } catch (e) {
      console.log(e)
    }
}

export const getConfigFibrease = async (key: string): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value) return value
  } catch(e) {
    console.log(e)
  }
}