# OneHAPIC-Remastered

In OneHAPIC (One Hand Piano Chords) Learn piano notes for each hand with a piano keyboard. Use a interative slider bar to navigate under the piano keys.

This app is responsive, it can be used in smarthphones and PCs.
This project is a rebuild of OneHAPIC, a webapp simulation of piano, made with React Native.

![Screenshot_1682746703](https://user-images.githubusercontent.com/29804266/235344409-f0029c43-248f-47d6-9ffd-453e4d481c92.png)

## How to Generate the APP installable file
After entered the android folder, to get an APK use the following command
```bash
./gradew assembleRelease
```
To get a bundle file:
```bash
./gradew assembleBundle
```

The apk is located on 
```bash
{YOUR_PROJECT_FOLDER}/android/app/build/outputs/apk/release/app-release.apk
```

The bundle file is on:
```bash
{YOUR_PROJECT_FOLDER}/android/app/build/outputs/apk/bundle/app-release.aab
```
