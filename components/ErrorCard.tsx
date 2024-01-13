import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/CardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="문제가 발생했어요. 조금 후에 다시 시도해주세요."
      backButtonHref="/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
