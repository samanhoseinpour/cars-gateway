import { CarProps } from '@/types';

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
