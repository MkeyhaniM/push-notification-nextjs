'use server'
 
import webpush from 'web-push'
 
webpush.setVapidDetails(
  'mailto:mahyar.keyhanii2@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

interface PushSubscription {
    endpoint: string;
    keys: {
      p256dh: string;
      auth: string;
    };
  }

let subscription: PushSubscription | null = null
 
export async function subscribeUser(sub: PushSubscription) {
  subscription = sub
  console.log('Server-side subscription stored:', subscription); 
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true }
}
 
export async function unsubscribeUser() {
  subscription = null
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true }
}
 

export async function sendNotification(message: string) {
    console.log(subscribeUser);

    if (!subscription) {
      console.error('No subscription available on the server'); // Debugging log
      return { success: false, error: 'No subscription available' }
    }
  
    try {
      console.log('Sending notification to:', subscription); // Debugging log
      await webpush.sendNotification(
        subscription,
        JSON.stringify({
          title: 'Test Notification',
          body: message,
          icon: '/file-manifest.256x256.png',
        })
      );
      return { success: true };
    } catch (error) {
      console.error('Error sending push notification:', error);
      return { success: false, error: 'Failed to send notification' };
    }
}