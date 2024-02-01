import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const registerForPushNotificationsAsync = async () => {
  if (Platform.OS === 'android') {
    const res = await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      //   sound: "emergency.wav",
    });
  }
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return; //Linking.openURL('app-settings:');????
  }
  const token = (
    await Notifications.getExpoPushTokenAsync({
      projectId: '11d72299-8887-4048-b7db-185eb0ce9ee4',
    })
  ).data;

  //   Notifications.setNotificationCategoryAsync("accept", [
  //     { buttonTitle: "ניווט", identifier: "confirm" },
  //     {
  //       buttonTitle: "ביטול",
  //       identifier: "cancel",
  //       options: {
  //         opensAppToForeground: false,
  //       },
  //     },
  //   ]);

  return token;
};

// for website platform notification
export const sendPushNotification = async (expoPushToken, body, subtitle, data) => {
  let message = {
    to: expoPushToken,
    sound: 'default',
    title: strings.PN_TITLE,
    body,
    subtitle,
  };
  if (data) {
    message = {
      ...message,
      data,
      categoryId: 'accept',
    };
  }

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};
