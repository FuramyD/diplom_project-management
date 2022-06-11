import { ReplaySubject } from "rxjs";
import { OnDestroy } from "@angular/core";

export abstract class RxUnsubscribe implements OnDestroy {
    private readonly destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    };
}
