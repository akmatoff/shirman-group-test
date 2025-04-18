import useCategoriesList from "@/entities/products/model/services/useCategoriesList";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useUpdateQueryParams } from "@/shared/hooks/useUpdateQueryParams";
import { QueryParamKeys } from "@/shared/queryParamKeys";
import LoadingSpinner from "@/shared/ui/loading-spinner";

interface Props {
  value?: string;
}

export default function CategorySelect({ value }: Props) {
  const { categories, isCategoriesLoading } = useCategoriesList();

  const updateQueryParams = useUpdateQueryParams();

  const handleChange = (value: string) => {
    updateQueryParams({ [QueryParamKeys.Category]: value });
  };

  return (
    <Select onValueChange={handleChange} value={value ?? ""}>
      <SelectTrigger className="max-w-48">
        <SelectValue placeholder="Выберите категорию..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Категории</SelectLabel>

          {isCategoriesLoading && (
            <div className="p-2 grid place-content-center">
              <LoadingSpinner />
            </div>
          )}
          {!isCategoriesLoading && !categories?.length && (
            <div className="p-2 grid place-content-center">
              Результаты не найдены.
            </div>
          )}

          {!isCategoriesLoading &&
            categories?.map((category) => (
              <SelectItem key={category.slug} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
