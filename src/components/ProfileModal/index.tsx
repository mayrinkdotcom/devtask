/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';

import { Button } from '../Button';
import { Input } from '../Input';

import {
  Container,
  ModalCloseButton,
  ModalContent,
  Textarea,
  Select,
} from './styles';
import { api } from '../../services/api';

type JobFormData = {
  title: string;
  category: string;
  description: string;
};

type CategoriesData = {
  id: number;
  title: string;
};

const jobFormSchema = yup.object().shape({});

type ModalProps = {
  modalIsOpen: boolean;
  toggleModalFunction: () => void;
};

export const ProfileModal: React.FC<ModalProps> = ({
  modalIsOpen,
  toggleModalFunction,
}) => {
  const [categories, setCategories] = useState<CategoriesData[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormData>({
    resolver: yupResolver(jobFormSchema),
  });

  const loadCategories = async () => {
    try {
      const response = await api.get('/category');

      setCategories(response.data.data);
    } catch (err) {
      toast.error('Falha ao buscar as categorias cadastradas.');
    }
  };

  useEffect(() => {
    reset();
    loadCategories();
  }, [modalIsOpen]);

  const handleCreateNewJob = useCallback(
    async (values) => {
      if (
        !values.title ||
        !values.description ||
        !values.category ||
        values.category === 'default'
      ) {
        toast.error(
          'Preencha todas as informações antes de publicar um trabalho.',
        );
        return;
      }

      const data = {
        title: values.title,
        description: values.description,
        categoryId: Number(values.category),
      };

      try {
        await api.post('/project', data);

        toast.success('Trabalho enviado com sucesso.');

        toggleModalFunction();
      } catch (err) {
        toast.error('Falha ao enviar esse trabalho.');
      }
    },
    [toggleModalFunction],
  );

  return (
    <Container modalIsOpen={modalIsOpen}>
      <ModalContent>
        <ModalCloseButton type="button" onClick={toggleModalFunction} />

        <form
          onSubmit={handleSubmit(handleCreateNewJob)}
          style={{ marginTop: '1rem' }}
        >
          <Input
            type="text"
            placeholder="Título do trabalho"
            error={errors.title}
            {...register('title')}
          />
          <Select defaultValue="default" {...register('category')}>
            <option value="default" hidden>
              Escolha uma opção
            </option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.title}
              </option>
            ))}
          </Select>
          <Textarea
            placeholder="Escreva algo sobre o trabalho"
            rows={6}
            {...register('description')}
          />

          <Button
            buttonType="solid"
            variant="primary"
            text="Enviar"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          />
        </form>
      </ModalContent>
    </Container>
  );
};
