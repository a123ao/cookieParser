export class CookieParams {
    private cookies = new Map<string, string>();

    constructor(cookieString = "") {
        this.parse(cookieString);
    }

    private parse(cookieString: string): void {
        if (!cookieString) return;

        cookieString
            .split(";")
            .forEach((cookie) => {
                const [key, value] = cookie.split("=");
                
                if (!key || !value) return;
                this.cookies.set(key.trim(), encodeURIComponent(value));
            });
    }

    get(key: string): string | undefined {
        return this.cookies.get(key);
    }

    set(key: string, value: string): void {
        this.cookies.set(key.trim(), encodeURIComponent(value));
    }

    delete(key: string): void {
        this.cookies.delete(key);
    }

    has(key: string): boolean {
        return this.cookies.has(key);
    }

    clear(): void {
        this.cookies.clear();
    }

    entries(): IterableIterator<[string, string]> {
        return new Map(this.cookies).entries();
    }

    keys(): IterableIterator<string> {
        return this.cookies.keys();
    }

    values(): IterableIterator<string> {
        return this.cookies.values();
    }

    size(): number {
        return this.cookies.size;
    }

    toString(): string {
        return [...this.cookies.entries()].reduce((acc, [key, value]) => acc + `${key}=${value}; `, "");
    }

    forEach(callback: (value: string, key: string)=> void): void {
        this.cookies.forEach(callback);
    }

    copy(): CookieParams {
        return new CookieParams(this.toString());
    }
}
