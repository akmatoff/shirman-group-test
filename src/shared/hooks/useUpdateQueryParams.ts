import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useUpdateQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (params: Record<string, string | number | null | undefined>) => {
      const urlSearchParams = new URLSearchParams(location.search);

      Object.entries(params).forEach(([key, value]) => {
        if (value == null || value === undefined || value === "") {
          urlSearchParams.delete(key);
        } else {
          urlSearchParams.set(key, String(value));
        }
      });

      const queryString = urlSearchParams.toString();
      const newUrl = `${location.pathname}${
        queryString ? `?${queryString}` : ""
      }`;

      navigate(newUrl, {
        replace: true,
        state: location.state,
      });
    },
    [location, navigate]
  );
};
