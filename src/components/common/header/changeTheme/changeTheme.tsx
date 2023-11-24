import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { toggleTheme } from "@/components/infra/storage/theme";

export function ChangeTheme() {
  const dispatch = useDispatch();

  return (
    <Container data-testid="change-theme-button" onClick={() => dispatch(toggleTheme())}>
      <div className="white-circle">
        <img src="/icons/change-theme-icon.svg" alt="Change Theme" />
      </div>
    </Container>
  );
}
