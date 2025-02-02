import { AxiosError } from 'axios';
import { t } from 'i18next';
import { toast } from 'react-toastify';

/**
 * @param messsage Message to be displayed
 * @param duration Duration of the toast in milliseconds (default: 5000ms)
 */
export default function errorToast(messsage: string, duration?: number) {
	toast(messsage, { type: 'error', autoClose: duration ?? 5000 });
}

/**
 * @param messsage Message to be displayed
 * @param duration Duration of the toast in milliseconds (default: 5000ms)
 */
export function successToast(messsage: string, duration?: number) {
	toast(messsage, { type: 'success', autoClose: duration ?? 5000 });
}

/**
 * @param messsage Message to be displayed
 * @param duration Duration of the toast in milliseconds (default: 5000ms)
 */
export function infoToast(messsage: string, duration?: number) {
	toast(messsage, { type: 'info', autoClose: duration ?? 5000 });
}

/**
 * @param messsage Message to be displayed
 * @param duration Duration of the toast in milliseconds (default: 5000ms)
 */
export function warningToast(messsage: string, duration?: number) {
	toast(messsage, { type: 'warning', autoClose: duration ?? 5000 });
}

/**
 * @description Receive a error and display a toast with error message
 * @param error Error to be handled
 */
export function toastErrorMessage(error: unknown) {
	if (error instanceof AxiosError && error.response?.data?.message) {
		return errorToast(error.response.data.message);
	}

	if (error instanceof Error && error.message) {
		return errorToast(error.message);
	}

	if (typeof error === 'string') {
		return errorToast(error);
	}

	errorToast(t('errors.defaultError'));
}
