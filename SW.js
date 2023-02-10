self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.Sendnotification('test mesage', {});
});