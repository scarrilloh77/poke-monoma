import toast from 'react-hot-toast';

export const successAlert = (message: string) => toast.success(message);
export const errorAlert = (message: string) => toast.error(message);
export const loadingAlert = (message: string) => toast.loading(message);
