import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const toastSuccess = (message: string) => {
    toast({
        title: 'Sucesso',
        description: message,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'bottom-left'
    });
};

export const toastError = (message: string) => {
    toast({
        title: 'Erro',
        description: message,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-left'
    });
};

export const toastInfo = (message: string) => {
    toast({
        title: 'Informação',
        description: message,
        status: 'info',
        duration: 4000,
        isClosable: true,
        position: 'bottom-left'
    });
};
